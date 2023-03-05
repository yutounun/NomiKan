import Button from '@mui/material/Button'

interface Props {
  variant?: 'contained' | 'outlined'
  value?: string
  color?:
    | 'inherit'
    | 'primary'
    | 'secondary'
    | 'success'
    | 'error'
    | 'info'
    | 'warning'
  size?: 'small' | 'medium' | 'large'
  disabled?: boolean
  onClick?: () => void
}
const MyButton: React.FC<Props> = (props) => {
  return (
    <Button
      onClick={props.onClick}
      data-testid='button'
      variant={props.variant}
      color={props.color}
      size={props.size}
      disabled={props.disabled}
    >
      {props.value}
    </Button>
  )
}
export default MyButton
