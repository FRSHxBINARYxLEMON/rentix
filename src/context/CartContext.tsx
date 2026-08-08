"use client";

import {
  createContext,
  useCallback,
  useContext,
  useSyncExternalStore,
  type ReactNode,
} from "react";
import type { Product } from "@/data/products";

export interface CartItem {
  product: Product;
  qty: number;
}

interface CartContextValue {
  items: CartItem[];
  count: number;
  total: number;
  addItem: (product: Product) => void;
  removeItem: (id: string) => void;
  clear: () => void;
}

const STORAGE_KEY = "rentix-cart";
const EMPTY: CartItem[] = [];

let cache: CartItem[] | null = null;
const listeners = new Set<() => void>();

function readCache(): CartItem[] {
  if (cache) return cache;
  if (typeof window === "undefined") {
    cache = EMPTY;
    return cache;
  }
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    cache = raw ? (JSON.parse(raw) as CartItem[]) : EMPTY;
  } catch {
    cache = EMPTY;
  }
  return cache;
}

function writeCache(next: CartItem[]) {
  cache = next;
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
  } catch {
    // storage may be unavailable
  }
  listeners.forEach((l) => l());
}

function handleStorage(e: StorageEvent) {
  if (e.key === STORAGE_KEY) {
    cache = null;
    listeners.forEach((l) => l());
  }
}

function subscribe(listener: () => void) {
  listeners.add(listener);
  window.addEventListener("storage", handleStorage);
  return () => {
    listeners.delete(listener);
    window.removeEventListener("storage", handleStorage);
  };
}

const getSnapshot = () => readCache();
const getServerSnapshot = () => EMPTY;

const CartContext = createContext<CartContextValue | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const items = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const addItem = useCallback((product: Product) => {
    const current = readCache();
    if (current.some((i) => i.product.id === product.id)) return;
    writeCache([...current, { product, qty: 1 }]);
  }, []);

  const removeItem = useCallback((id: string) => {
    writeCache(readCache().filter((i) => i.product.id !== id));
  }, []);

  const clear = useCallback(() => writeCache(EMPTY), []);

  const count = items.length;
  const total = items.reduce((sum, i) => sum + i.product.price, 0);

  return (
    <CartContext.Provider
      value={{ items, count, total, addItem, removeItem, clear }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}
