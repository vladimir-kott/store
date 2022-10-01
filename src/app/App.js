import TextField from "./components/common/form/textField";

function App() {
  return (
    <div className="App">
      <header className="w-full h-full">
        <TextField 
          label = "Тестовий лейбл"
          type = "text"
          name = "text_field"
          value = "Це текстове поле з можливыстю редагування"
          placeholder = "введіть ваші данні"
          error="тестова помилка валідації"
        />
        <TextField 
          label = "Тестовий лейбл"
          type = "password"
          name = "password_field"
          value = "Це текстове поле з можливыстю редагування"
          placeholder = "введіть ваші данні"
          error="тестова помилка валідації"
        />
        <TextField 
          label = "Тестовий лейбл"
          type = "text"
          customType="search"
          name = "search_field"
          value = "Це текстове поле з можливыстю редагування"
          placeholder = "введіть ваші данні"
          error="тестова помилка валідації"
        />
        <TextField 
          label = "Тестовий лейбл"
          type = "text"
          customType="any"
          name = "custom_field"
          value = "Це текстове поле з можливыстю редагування"
          placeholder = "введіть ваші данні"
          error="тестова помилка валідації"
        />
      </header>
    </div>
  );
}

export default App;
