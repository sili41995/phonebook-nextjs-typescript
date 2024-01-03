import { NavLinkTypes } from '@/constants';
import { INavLink } from '@/types/types';

interface IProps {
  linksType: NavLinkTypes;
  links: INavLink[];
}

const getNavLinks = ({ linksType, links }: IProps): INavLink[] =>
  links.filter(({ type }) => type === linksType);

export default getNavLinks;
