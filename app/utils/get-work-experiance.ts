export function getWorkExperience(startDate: Date | string): string {
  const start = new Date(startDate);
  const now = new Date();

  const diffMs = now.getTime() - start.getTime();
  const diffYears = diffMs / (1000 * 60 * 60 * 24 * 365);

  const years = Math.floor(diffYears);

  if (years <= 0) {
    return "less than 1 year";
  }

  // Add "about" or "over"
  const isOver = diffYears - years >= 0.5;

  return `${isOver ? "over" : ""} ${years} year${years > 1 ? "s" : ""}`;
}
