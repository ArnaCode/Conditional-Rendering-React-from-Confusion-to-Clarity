import { ReactNode, useState } from "react";

interface ModalProps {
  isOpen: boolean;
  children: ReactNode;
}

const Modal = ({ isOpen, children }: ModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed  flex flex-col justify-center gap-4 bg-slate-500 px-6 py-4 rounded">
      {children}
    </div>
  );
};

const ModalHeader = ({ children }: { children: ReactNode }) => (
  <header className="border-b pb-4 font-bold text-xl">{children}</header>
);

const ModalBody = ({ children }: { children: ReactNode }) => (
  <section>{children}</section>
);

const ModalFooter = ({ children }: { children: ReactNode }) => (
  <footer className="pt-4 border-t">{children}</footer>
);

export default function Case10() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showHeader, setShowHeader] = useState(true);
  const [showBody, setShowBody] = useState(true);
  const [showFooter, setShowFooter] = useState(true);

  return (
    <main className="min-h-screen flex flex-col items-center justify-evenly p-6 gap-10">
      <div className="flex gap-4">
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={showHeader}
            onChange={(e) => setShowHeader(e.target.checked)}
          />
          Show Header
        </label>
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={showBody}
            onChange={(e) => setShowBody(e.target.checked)}
          />
          Show Body
        </label>
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={showFooter}
            onChange={(e) => setShowFooter(e.target.checked)}
          />
          Show Footer
        </label>
      </div>

      <button
        onClick={() => setIsModalOpen(true)}
        className="px-4 py-2 bg-blue-600 text-white rounded"
      >
        Open Modal
      </button>

      <Modal isOpen={isModalOpen}>
        {showHeader && <ModalHeader>Modal Title</ModalHeader>}

        {showBody && <ModalBody>This is the modal body content.</ModalBody>}

        {showFooter && (
          <ModalFooter>
            <button
              onClick={() => setIsModalOpen(false)}
              className="px-4 py-2 bg-slate-600 rounded"
            >
              Close
            </button>
          </ModalFooter>
        )}
      </Modal>
    </main>
  );
}
