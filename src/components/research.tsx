import NiceModal from '@ebay/nice-modal-react';

const Research = () => {
  const showAntdModal = (id: string) => {
    // Show a modal with arguments passed to the component as props
    NiceModal.show(id);
  };
  return (
    <div className="app">
      <h1>Nice Modal Examples</h1>
      <div className="demo-buttons">
        <button onClick={() => showAntdModal('my-antd-modal')}>
          Antd Modal
        </button>
        <button onClick={() => showAntdModal('modal')}>Modal</button>
      </div>
    </div>
  );
};

export default Research;
