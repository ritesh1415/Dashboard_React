import React, { useState } from 'react';
import Dashboard from './Dashboard';
import AddWidgetModal from './AddWidgetModal';
import SearchWidget from './SearchWidget';
import initialData from './dashboard.json'; 
import './styles.css';

function App() {
  const [data, setData] = useState(initialData);
  const [showModal, setShowModal] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  const addWidget = (categoryId, widget) => {
    const updatedData = { ...data };
    const category = updatedData.categories.find(cat => cat.id === categoryId);
    if (category) {
      category.widgets.push(widget);
      setData(updatedData);
    }
  };

  const removeWidget = (categoryId, widgetId) => {
    const updatedData = { ...data };
    const category = updatedData.categories.find(cat => cat.id === categoryId);
    if (category) {
      category.widgets = category.widgets.filter(widget => widget.id !== widgetId);
      setData(updatedData);
    }
  };

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <div className="App">
      <SearchWidget onSearch={handleSearch} />
      <Dashboard
        data={data}
        searchQuery={searchQuery}
        onAddWidget={setShowModal}
        onRemoveWidget={removeWidget}
        onSelectCategory={setSelectedCategory}
      />
      {showModal && (
        <AddWidgetModal
          onAddWidget={(widget) => {
            addWidget(selectedCategory, widget);
            setShowModal(false);
          }}
          onClose={() => setShowModal(false)}
        />
      )}
    </div>
  );
}

export default App;
