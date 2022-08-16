import styles from '../../styles/Persons.module.css'
import Link from 'next/link'

export const getStaticProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await res.json();

  return {
    props: { persons: data }
  }
}

const Persons = ({ persons }) => {

  return (
    <div>
      <h1>All Persons</h1>
      {persons.map(person => (
        <Link href={'/persons/' + person.id} key={person.id}>
          <a className={styles.single}>
            <h3>{ person.name }</h3>
          </a>
        </Link>
      ))}
    </div>
  );
}
 
export default Persons;