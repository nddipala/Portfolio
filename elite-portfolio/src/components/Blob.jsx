export default function Blob(){
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10">
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[700px] h-[700px] blob opacity-70 dark:opacity-50" />
    </div>
  )
}
