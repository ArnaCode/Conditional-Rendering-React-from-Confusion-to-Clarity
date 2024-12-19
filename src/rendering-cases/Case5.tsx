interface StatusBadgeProps {
  status: "success" | "warning" | "error" | "info";
}

const StatusBadge = ({ status }: StatusBadgeProps) => {
  let styleClasses = "";
  let text = "";

  switch (status) {
    case "success":
      styleClasses = "bg-green-100 text-green-700";
      text = "Success";
      break;
    case "warning":
      styleClasses = "bg-yellow-100 text-yellow-700";
      text = "Warning";
      break;
    case "error":
      styleClasses = "bg-red-100 text-red-700";
      text = "Error";
      break;
    case "info":
      styleClasses = "bg-blue-100 text-blue-700";
      text = "Info";
      break;
  }

  return (
    <span
      className={`inline-block px-2 py-1 rounded text-sm font-medium ${styleClasses}`}
    >
      {text}
    </span>
  );
};

export default function Case5() {
  return (
    <main className="p-6  min-h-screen flex flex-col gap-4 items-center justify-center">
      <StatusBadge status="success" />
      <StatusBadge status="warning" />
      <StatusBadge status="error" />
      <StatusBadge status="info" />
    </main>
  );
}
