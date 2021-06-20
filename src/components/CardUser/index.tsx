import { FiEdit, FiTrash2 } from 'react-icons/fi';
import { useFormMember } from '../../hooks/FormMemberProvider';
import { PrimaryButton } from '../PrimaryButton';
interface ImemberInterface {
  email: string;
  name: string;
  profile: string;
}

interface CardUserProps{
  member: ImemberInterface;
  fetchMember(): void;
}

export const CardUser = ({ member, fetchMember }: CardUserProps) => {
  const { handleOpenModal } = useFormMember()

    return (
    <tr>
      <td>{member.name}</td>
      <td>{member.email}</td>
      <td>{member.profile}</td>
      <td>
        <PrimaryButton bg="#ffe420" onClick={() => handleOpenModal(member)} icon={<FiEdit color="#555" />} />
        &nbsp; &nbsp;
        <PrimaryButton bg="#ca2f2f" icon={<FiTrash2 />} />
        
      </td>
    </tr>
  )

}
