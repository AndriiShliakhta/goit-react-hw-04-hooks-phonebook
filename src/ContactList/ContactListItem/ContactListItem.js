const ContactListItem = ({ name, number, id, deleteContact }) => {
  const deleteItem = () => {
    deleteContact(id);
  };
  return (
    <li>
      {name}: {number}{' '}
      <button type="button" onClick={deleteItem}>
        Delete
      </button>
    </li>
  );
};

export default ContactListItem;
