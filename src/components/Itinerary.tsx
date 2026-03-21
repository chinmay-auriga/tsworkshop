import { SCHEDULE, getScheduleRange, useScheduleClock } from "../useSchedule";

export function Itinerary() {
  const { currentMinutes, activeIndex } = useScheduleClock();

  return (
    <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-6 md:p-10">
      <div className="mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold mb-2">
            Workshop Itinerary
          </h2>
          <p className="text-gray-500 dark:text-gray-400 text-lg">
            21 March 2026 &middot; Starts at 11:30 AM
          </p>
        </div>
        {/* <div className="text-right">
          <p className="font-mono text-2xl font-bold text-blue-600 dark:text-blue-400">{formatClock(now)}</p>
          {activeIndex !== -1 ? (
            <>
              <p className="text-sm font-semibold text-green-600 dark:text-green-400 mt-1">
                Now: {SCHEDULE[activeIndex].label}
              </p>
              {remainingLabel && (
                <p className="text-xs font-mono text-orange-600 dark:text-orange-400 mt-0.5">
                  {remainingLabel}
                </p>
              )}
            </>
          ) : (
            <p className="text-sm text-gray-400 dark:text-gray-500 mt-1">No active session</p>
          )}
        </div> */}
      </div>

      <div className="border-t border-gray-200 dark:border-gray-800 pt-6">
        <ol className="space-y-3">
          {SCHEDULE.map((item, index) => {
            const isCurrent = index === activeIndex;
            const [start] = getScheduleRange(item.time);
            const isPast =
              activeIndex === -1
                ? currentMinutes >= start
                : index < activeIndex;

            return (
              <li
                key={item.time}
                className={`
                  flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 rounded-xl border px-4 py-3 transition-all
                  ${
                    isCurrent
                      ? "border-green-400 dark:border-green-600 bg-green-50 dark:bg-green-950/30 ring-2 ring-green-400/50"
                      : isPast
                        ? "border-gray-200 dark:border-gray-800 bg-gray-100 dark:bg-gray-950 opacity-50"
                        : item.type === "break"
                          ? "border-yellow-300 dark:border-yellow-700 bg-yellow-50 dark:bg-yellow-950/30"
                          : "border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-950"
                  }
                `}
              >
                <span className="shrink-0 font-mono text-sm font-semibold text-gray-500 dark:text-gray-400 w-52">
                  {isCurrent && (
                    <span className="inline-block w-2 h-2 rounded-full bg-green-500 mr-2 animate-pulse" />
                  )}
                  {item.time}
                </span>
                <div>
                  <span
                    className={`font-semibold ${isCurrent ? "text-green-700 dark:text-green-400" : item.type === "break" ? "text-yellow-700 dark:text-yellow-400" : "text-gray-700 dark:text-gray-200"}`}
                  >
                    {item.label}
                  </span>
                  {item.description ? (
                    <span className="ml-2 text-sm text-gray-500 dark:text-gray-400">
                      &mdash; {item.description}
                    </span>
                  ) : null}
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </div>
  );
}
