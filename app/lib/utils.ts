import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

/**
 * クラス名を結合し、最適化する関数
 *
 * @module cn
 * @file app/lib/utils.ts
 * @param {...ClassValue[]} inputs - 結合するクラス名（文字列、オブジェクト、または配列）
 * @returns {string} 最適化された結合クラス名
 *
 * @example
 * cn('px-2', 'py-1', { 'bg-red-500': isError }, ['text-white', 'font-bold'])
 * // 結果: "px-2 py-1 bg-red-500 text-white font-bold"
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
