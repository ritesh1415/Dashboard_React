import React, { useState } from 'react';

function AddWidgetModal({ onAddWidget, onClose }) {
  const [widgetName, setWidgetName] = useState('');
  const [widgetText, setWidgetText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddWidget({
      id: Date.now().toString(),
      name: widgetName,
      text: widgetText,
    });
  };

  return (
    <div className="modal">
      <form onSubmit={handleSubmit}>
        <label>
          Widget Name:
          <input
            type="text"
            value={widgetName}
            onChange={(e) => setWidgetName(e.target.value)}
            required
          />
        </label>
        <label>
          Widget Text:
          <input
            type="text"
            value={widgetText}
            onChange={(e) => setWidgetText(e.target.value)}
            required
          />
        </label>
        <button type="submit">Add Widget</button>
        <button type="button" onClick={onClose}>Cancel</button>
      </form>
    </div>
  );
}

export default AddWidgetModal;
