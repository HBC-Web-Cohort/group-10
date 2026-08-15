import { useCallback, useEffect, useState } from "react";
import { reviews as seedReviews, type Review } from "@/data/site";

export const REVIEWS_STORAGE_KEY = "silkRoadReviews";

export type StoredReview = Review & {
  guideRating?: number;
  companyRating?: number;
  destination?: string;
  guideName?: string;
};

function readStored(): StoredReview[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.localStorage.getItem(REVIEWS_STORAGE_KEY);
    const parsed = raw ? JSON.parse(raw) : [];
    return Array.isArray(parsed) ? (parsed as StoredReview[]) : [];
  } catch {
    return [];
  }
}

/** Seed reviews plus any reviews this browser has stored locally. */
export function useReviews() {
  const [stored, setStored] = useState<StoredReview[]>([]);

  useEffect(() => {
    setStored(readStored());
  }, []);

  const addReview = useCallback((review: StoredReview) => {
    setStored((prev) => {
      const next = [review, ...prev];
      try {
        window.localStorage.setItem(REVIEWS_STORAGE_KEY, JSON.stringify(next));
      } catch {
        /* storage unavailable — keep in-memory only */
      }
      return next;
    });
  }, []);

  const all: StoredReview[] = [...stored, ...(seedReviews as StoredReview[])];

  const count = all.length;
  const average = count ? all.reduce((sum, r) => sum + r.rating, 0) / count : 0;
  const guideRatings = all.filter((r) => typeof r.guideRating === "number");
  const companyRatings = all.filter((r) => typeof r.companyRating === "number");
  const guideAverage = guideRatings.length
    ? guideRatings.reduce((s, r) => s + (r.guideRating as number), 0) / guideRatings.length
    : average;
  const companyAverage = companyRatings.length
    ? companyRatings.reduce((s, r) => s + (r.companyRating as number), 0) / companyRatings.length
    : average;

  const distribution = [5, 4, 3, 2, 1].map((star) => {
    const starCount = all.filter((r) => Math.round(r.rating) === star).length;
    return { star, count: starCount, percent: count ? (starCount / count) * 100 : 0 };
  });

  return { reviews: all, addReview, count, average, guideAverage, companyAverage, distribution };
}
