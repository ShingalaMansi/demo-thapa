
import './App.css';

function App() {
  // const person = {
  //   name: "Amit",
  //   age: 25
  // }
  // const person1 = [
  //     {
  //         name: "Amit",
  //         age: 25,
  //     },
  //     {
  //         name: "Piyush",
  //         age: 40,
  //     },
  // ];

  // const person3 = {
  //   name: "Amit",
  //   age: 25,
  //   course: [
  //       "C " ,
  //       "HTML"
  //   ]
  // }

  // const person4 = [
  //   {
  //       name: "Amit",
  //       age: 25,
  //       course: [
  //           "C",
  //           "HTML"
  //       ]
  //   },
  //   {
  //       name: "Ajay",
  //       age: 40,
  //       course: [
  //           "Java",
  //           "JavaScript"
  //       ]
  //   }
  // ]

  // const person5 = {
  //   name: "John",
  //   age: 30,
  //   cars: {
  //       car1: "Ford",
  //       car2: "BMW",
  //       car3: "Fiat"
  //   }
  // }

  const person6 = {
    personal_info: {
        name: 'amit',
        age: 25,
        city: 'surat'
    },
    courses: ["C", "JavaScript", "React"],
    branches: {
        rwl: {
            admission: 50,
            vacant_seat: 10
        },
        rw2: {
            admission: 30,
            vacant_seat: 20
        },
        rw3: {
            admission: 25,
            vacant_seat: 25
        },
        rw4: {
            admission: 40,
            vacant_seat: 10
        }
    }
  }


  return (
    <div>
      {/* <h3>{person.name}</h3>
      <h3>{person.age}</h3>
      {person1.map((item,index) => {
        return (
          <>
          <h4>{item.name}</h4>
          <h5>{item.age}</h5>
          </>
        )
      })} */}

      {/* <h4>{person3.name}</h4>
      <h4>{person3.age}</h4>
      {person3.course.map((item,index)=>{
        return(
          <>
            <h4>{item}</h4>
          </>
        )
      })} */}

      {/* {person4.map((item,index)=>{
        return(
          <div key={index}>
            <h4>{item.name}</h4>
            <h4>{item.age}</h4>
            {item.course.map((item,index)=>{
              return(
                <div key={index}>
                  <h4>{item}</h4>
                </div>
              )
            })}
          </div>
        )
      })} */}

      {/* <h4>{person5.name}</h4>
      <h4>{person5.age}</h4>
      <h4>{person5.cars.car1}</h4>
      <h4>{person5.cars.car2}</h4>
      <h4>{person5.cars.car3}</h4> */}

        <h4>{person6.personal_info.name}</h4>
        <h4>{person6.personal_info.age}</h4>
        <h4>{person6.personal_info.city}</h4>

        {person6.courses.map((item,index)=>{
          return(
            <div key={index}>
              <h4>{item}</h4>
            </div>
          )
        })}

        <h4>{person6.branches.rwl.admission}</h4>
        <h4>{person6.branches.rwl.vacant_seat}</h4>
        <h4>{person6.branches.rw2.admission}</h4>
        <h4>{person6.branches.rw2.vacant_seat}</h4>
        <h4>{person6.branches.rw3.admission}</h4>
        <h4>{person6.branches.rw3.vacant_seat}</h4>
        <h4>{person6.branches.rw4.admission}</h4>
        <h4>{person6.branches.rw4.vacant_seat}</h4>
    </div>
  );
}

export default App;
