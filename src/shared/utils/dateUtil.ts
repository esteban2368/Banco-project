export const isValidDate = (value: unknown): value is Date => {
  if (value instanceof Date) {
    return !Number.isNaN(value.getTime());
  }

  if (typeof value === 'string' || typeof value === 'number') {
    const date = new Date(value);
    return !Number.isNaN(date.getTime());
  }

  return false;
};

export const parseDate = (value: string | Date | number): Date | null => {
  const date = value instanceof Date ? value : new Date(value);
  return isValidDate(date) ? date : null;
};

export const formatDate = (
  value: string | Date | number,
  locale = 'es-ES',
  options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: '2-digit',
  }
): string => {
  const date = parseDate(value);
  if (!date) {
    return '';
  }

  return new Intl.DateTimeFormat(locale, options).format(date);
};