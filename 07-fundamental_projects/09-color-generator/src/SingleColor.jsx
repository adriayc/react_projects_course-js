import { toast } from 'react-toastify';

const SingleColor = ({ color, index }) => {
  //   console.log(color);
  const { hex, weight } = color;

  const saveToClipboard = async () => {
    // The  Clipboard object used to access the system clipboard
    if (navigator.clipboard) {
      try {
        // The writeText() method of the Clipboard interface writes the specified text to the system clipboard, returning a Promise that is resolved once the system clipboard has been updated.
        await navigator.clipboard.writeText(`#${hex}`);

        // Toastify
        toast.success('Color copied to clipboard');
      } catch (error) {
        // Toastify
        toast.error('Failed to copy color to clipboard');
      }
    } else {
      // Toastify
      toast.error('Clipboard access not available');
    }
  };

  return (
    <article
      className={index > 10 ? 'color color-light' : 'color'}
      style={{ background: `#${hex}` }}
      onClick={saveToClipboard}
    >
      <p className="percent-value">{weight}%</p>
      <p className="color-value">#{hex}</p>
    </article>
  );
};

export default SingleColor;
