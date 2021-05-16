export interface DialogTitleProps extends WithStyles<typeof styles> {
  id: string;
  children: React.ReactNode;
  onClose: React.Dispatch<React.SetStateAction<boolean>>;
  classes: any;
}
