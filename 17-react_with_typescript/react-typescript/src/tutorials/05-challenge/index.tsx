// type ProfileCardProps = {
//   type: 'basic';
//   name: string;
//   email?: string;
// };

type BasicProfileCardProps = {
  type: 'basic';
  name: string;
};

type AdvancedProfileCardProps = {
  type: 'advanced';
  name: string;
  email: string;
};

type ProfileCardProps = BasicProfileCardProps | AdvancedProfileCardProps;

function Component(props: ProfileCardProps) {
  //   const { type, name, email } = props;
  //   const alertType = type === 'basic' ? 'success' : 'danger';
  //   const className = `alert alert-${alertType}`;
  //   return (
  //     <div>
  //       <h2>React & TypeScript</h2>
  //       <h2>Challenge</h2>
  //     </div>
  //   );
  //   return (
  //     <article className={className}>
  //       <h2>user: {name}</h2>
  //       {email && <h2>email: {email}</h2>}
  //     </article>
  //   );

  const { type, name } = props;

  if (type === 'basic') {
    return (
      <article className="alert alert-success">
        <h2>name: {name}</h2>
      </article>
    );
  }
  return (
    <article className="alert alert-danger">
      <h2>name: {name}</h2>
      <h2>email: {props.email}</h2>
    </article>
  );
}

export default Component;
