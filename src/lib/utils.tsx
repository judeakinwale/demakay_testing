// lib/utils.js (or utils/cn.js)
import { clsx } from "clsx"; // Import clsx
import { twMerge } from "tailwind-merge"; // Import twMerge for Tailwind specific conflicts

/**
 * Merges Tailwind CSS classes, handling conflicts and conditional classes.
 * This function combines `clsx` for general class merging and
 * `tailwind-merge` to intelligently resolve conflicting Tailwind classes
 * (e.g., `p-4` and `p-8` will result in `p-8`).
 *
 * @param {...(string | object | Array<string | object | Array> | boolean | null | undefined)} inputs - A list of class names, objects with conditional classes, or arrays of classes.
 * @returns {string} The merged class name string.
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function cn(...inputs: any) {
  // clsx handles merging various types of inputs (strings, objects, arrays)
  // twMerge handles resolving Tailwind CSS conflicts (e.g., p-4 vs p-8)
  return twMerge(clsx(inputs));
}
