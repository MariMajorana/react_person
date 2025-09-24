export const Person = ({ person }) => {
  const { name, age, partnerName, isMarried = false, sex } = person;
  const partnerLabel = sex === 'm' ? 'wife' : 'husband';
  const partnerText = isMarried ? (
    <p className="Person__partner">
      {partnerName} is my {partnerLabel}
    </p>
  ) : (
    <p className="Person__partner">I am not married</p>
  );
  const hasAge = age != null;

  return (
    <section className="Person">
      <h2 className="Person__name">My name is {name}</h2>

      {hasAge && <p className="Person__age">I am {age}</p>}

      {partnerText}
    </section>
  );
};
