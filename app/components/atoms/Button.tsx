/**
 * Interface
 */
interface ButtonType {
  text: string;
  onClick: VoidFunction;
}

export default function Button({ text, onClick }: ButtonType) {
  return (
    <button
      onClick={onClick}
      className="w-fit text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:border-blue-500 dark:text-white dark:hover:text-blue-500 dark:hover:bg-teal-50 dark:focus:ring-blue-800"
    >
      {text}
    </button>
  );
}
