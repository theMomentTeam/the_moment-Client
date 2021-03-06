import { OpenedModal } from "Atom/AtomContainer";
import React, { createContext, useCallback, useContext } from "react";
import { useRecoilState } from "recoil";
import * as modals from "../Components/Modals";

export type ModalProps = {
  close: () => void;
  idx?: number;
  state?: string;
  heading?: string;
  key?: number;
  content?: string;
  header?: string;
};

export type Modal = {
  name: keyof typeof modals;
  idx?: {
    [key in number]: any;
  };
  state?: {
    [key in number]: any;
  };
  heading?: {
    [key in string]: any;
  };
  key?: {
    [key in number]: any;
  };
  content?: {
    [key in string]: any;
  };
  header?: {
    [key in string]: any;
  };
};

type ModalContextValues = {
  open: <T extends Modal["name"]>(
    name: T,
    idx: Omit<
      React.ComponentProps<typeof modals[T]>,
      keyof ModalProps | "children"
    >,
    state?: Omit<
      React.ComponentProps<typeof modals[T]>,
      keyof ModalProps | "children"
    >,
    heading?: Omit<
      React.ComponentProps<typeof modals[T]>,
      keyof ModalProps | "children"
    >,
    key?: Omit<
      React.ComponentProps<typeof modals[T]>,
      keyof ModalProps | "children"
    >,
    content?: Omit<
      React.ComponentProps<typeof modals[T]>,
      keyof ModalProps | "children"
    >,
    header?: Omit<
      React.ComponentProps<typeof modals[T]>,
      keyof ModalProps | "children"
    >
  ) => void;
};

export const ModalContext = createContext<ModalContextValues | null>(null);

export const ModalContextProvider: React.FC = ({ children }) => {
  const [openedModal, setOpenedModal] = useRecoilState(OpenedModal);

  const open = useCallback(
    (name, idx, state, heading, key, content, header) => {
      setOpenedModal({ name, idx, state, heading, key, content, header });
    },
    []
  );

  const close = useCallback(() => {
    setOpenedModal(null);
  }, [setOpenedModal]);

  return (
    <ModalContext.Provider value={{ open }}>
      {children}
      {openedModal && <ModalRenderer close={close} modal={openedModal} />}
    </ModalContext.Provider>
  );
};

const ModalRenderer: React.FC<ModalProps & { modal: Modal }> = ({
  close,
  modal,
}) => {
  const Modal = modals[modal.name];
  return (
    <Modal
      close={close}
      idx={modal.idx}
      heading={modal.heading}
      state={modal.state}
      key={modal.key}
      content={modal.content}
      header={modal.header}
      {...(modal.heading as any)}
    />
  );
};

// hook

export const useModal = () => {
  const context = useContext(ModalContext);

  if (!context) {
    throw new Error("context must be provided");
  }

  return context;
};
