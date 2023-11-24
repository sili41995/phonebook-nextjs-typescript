'use client';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main>
      <div className='container error'>
        <p className='error-message'>{error.message}</p>
        <button className='reset-btn' onClick={reset}>
          Try again
        </button>
      </div>
    </main>
  );
}
