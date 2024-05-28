function Clock() {
  let dt_now = new Date();
  return (
    <div>This is the current time: {dt_now.toLocaleDateString()} - {dt_now.toLocaleTimeString()}</div>
  )
}
export default Clock;
