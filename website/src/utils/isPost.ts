import { isStringArray } from './isStringArray';

export function isPost(obj: unknown): obj is Post {
  const isPostLike = (
    given: unknown
  ): given is Partial<Record<keyof Post, unknown>> => {
    return typeof given === 'object' && given !== null;
  };

  return (
    isPostLike(obj) &&
    typeof obj.author == 'string' &&
    typeof obj.title == 'string' &&
    typeof obj.content == 'string' &&
    typeof obj.date == 'object' &&
    obj.date != null &&
    'year' in obj.date &&
    typeof obj.date.year == 'string' &&
    'month' in obj.date &&
    typeof obj.date.month == 'string' &&
    'day' in obj.date &&
    typeof obj.date.day == 'string' &&
    'hr' in obj.date &&
    typeof obj.date.hr == 'string' &&
    'min' in obj.date &&
    typeof obj.date.min == 'string' &&
    'sec' in obj.date &&
    typeof obj.date.sec == 'string' &&
    isStringArray(obj.tags)
  );
}
