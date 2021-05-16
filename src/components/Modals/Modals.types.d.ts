export interface IModalType {
  modalType: "UsersList";
  handleClick: React.Dispatch<React.SetStateAction<boolean>>;
  open: boolean;
}
