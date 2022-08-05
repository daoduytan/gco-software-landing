export const ErrorMessage = ({ error }: { error?: string }) => {
  return <div className="text-red-600 mt-2 text-sm">{error}</div>;
};
