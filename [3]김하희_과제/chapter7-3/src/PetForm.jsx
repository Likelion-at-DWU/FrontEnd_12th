import { useState } from "react";

export function PetForm() {
  const [name, setName] = useState("");
  const [species, setSpecies] = useState("");
  const [age, setAge] = useState("");

  const [pets, setPets] = useState([
    { name: "벨라", species: "고양이", age: "5", id: 111 },
    { name: "루시", species: "강아지", age: "3", id: 112 },
    { name: "데이지", species: "토끼", age: "2", id: 113 },
    { name: "몰리", species: "고양이", age: "6", id: 114 },
    { name: "매기", species: "햄스터", age: "1", id: 115 },
  ]);

  function handleSubmit(event) {
    event.preventDefault();
    setPets((prev) => {
      return prev.concat({ name, species, age, id: Date.now() });
    });
    // console.log(name, species, age);
    setName("");
    setSpecies("");
    setAge("");
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend>새로운 애완동물을 추가하세요!</legend>
          <label>
            <input
              type="text"
              placeholder="이름"
              onChange={(event) => {
                return setName(event.target.value);
              }}
            />
          </label>
          <label>
            <input
              type="text"
              placeholder="종"
              onChange={(event) => {
                return setSpecies(event.target.value);
              }}
            />
          </label>
          <label>
            <input
              type="text"
              placeholder="나이"
              onChange={(event) => {
                return setAge(event.target.value);
              }}
            />
          </label>
          <button>추가하기</button>
        </fieldset>
      </form>
      <ul>
        {pets.map((props) => {
          return (
            <Pet
              key={props.id}
              name={props.name}
              species={props.species}
              age={props.age}
              id={props.id}
            />
          );
        })}
      </ul>
    </>
  );
}

function Pet(props) {
  return (
    <li>
      {props.name}는 {props.species}입니다. 그리고 {props.age}살 입니다.
    </li>
  );
}
