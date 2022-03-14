export default function Image(props) {
  return (
    <img
      src={`https://avatars.dicebear.com/v2/avataaars/${props.username}.svg?options[mood][
]=happy`} height="190px" alt={`${props.username}`}
    />
  )
}