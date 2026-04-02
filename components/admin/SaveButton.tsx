export default function SaveButton({
  loading,
  label = 'Save changes',
}: {
  loading?: boolean
  label?: string
}) {
  return (
    <button
      type="submit"
      disabled={loading}
      className="bg-red-600 hover:bg-red-700 disabled:opacity-50 disabled:cursor-not-allowed
                 text-white font-semibold rounded-lg px-5 py-2 text-sm transition-colors"
    >
      {loading ? 'Saving…' : label}
    </button>
  )
}
