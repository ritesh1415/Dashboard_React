import React from 'react';
import Widget from './Widget';

function Dashboard({ data, searchQuery, onAddWidget, onRemoveWidget, onSelectCategory }) {
  return (
    <div>
      {data.categories.map(category => (
        <div key={category.id}>
          <h2>{category.name}</h2>
          <button onClick={() => { onSelectCategory(category.id); onAddWidget(true); }}>+ Add Widget</button>
          <div>
            {category.widgets.filter(widget => widget.name.toLowerCase().includes(searchQuery.toLowerCase())).map(widget => (
              <Widget
                key={widget.id}
                widget={widget}
                onRemove={() => onRemoveWidget(category.id, widget.id)}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Dashboard;
