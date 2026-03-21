import { formatClock, useScheduleClock } from '../useSchedule';

export function LiveStatus() {
  const { now, activeItem, remainingLabel } = useScheduleClock();

  return (
    <div className="flex flex-wrap items-center justify-between gap-2 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 px-4 py-2.5 mb-4">
      <p className="font-mono text-lg font-bold text-blue-600 dark:text-blue-400">
        {formatClock(now)}
      </p>
      {activeItem ? (
        <div className="flex items-center gap-3">
          <span className="flex items-center gap-1.5 text-sm font-semibold text-green-600 dark:text-green-400">
            <span className="inline-block w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            {activeItem.label}
          </span>
          {remainingLabel && (
            <span className="font-mono text-xs text-orange-600 dark:text-orange-400">
              {remainingLabel}
            </span>
          )}
        </div>
      ) : (
        <span className="text-sm text-gray-400 dark:text-gray-500">No active session</span>
      )}
    </div>
  );
}
