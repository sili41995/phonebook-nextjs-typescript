'use client';

import ErrorMessage from '@/components/ErrorMessage';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className='container'>
      <ErrorMessage reset={reset} message={error.message} />
    </div>
  );
}
