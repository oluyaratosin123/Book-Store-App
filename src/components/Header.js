import { NavLink } from 'react-router-dom';
import { ImUser } from 'react-icons/im';
import styled from 'styled-components';

const NavBar = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.813rem 6.25rem;
  background: var(--white); 
  > div {
    &:last-child {
      border: solid 1px var(--neutral-color-1);
      border-radius: 50%;
      padding: 0.875rem;
      width: 2.813rem;
      height: 2.813rem;
      color: var(--primary-color-1);
    }
  }
  @media (max-width: 992px){
    padding: 2rem;
  }
  @media (max-width: 768px){
    padding: 1rem;
  }
`;

const NavContainer = styled(NavBar)`
  padding: 0;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  > div {
    color: var(--primary-color-1);
    h2 {
      font-size: 1.875rem;
      font-weight: bold;
      letter-spacing: normal;
      @media (max-width: 768px){
        font-size: 1.1rem;
      }
    }
  }
  > nav {
    > .links {
      opacity: 0.5;
      font-size: 0.813rem;
      font-weight: normal;
      letter-spacing: 1.9px;
      color: var(--black);
      &:first-child {
        margin-left: 2.938rem
      }
      &:last-child {
        margin-left: 2.563rem
      }
      @media (max-width: 768px){
        font-size: 0.5rem;
        &:first-child {
        margin-left: 1rem
        }
        &:last-child {
          margin-left: 1rem
      }
      }
    }
  }
`;

const Header = () => {
  const links = [
    {
      id: 1,
      path: '/',
      text: 'BOOKS',
    },
    {
      id: 2,
      path: '/categories',
      text: 'CATEGORIES',
    },
  ];
  return (
    <NavBar>
      <NavContainer as="div">
        <div>
          <h2>Bookstore CMS</h2>
        </div>
        <nav>
          {links.map((link) => (
            <NavLink
              key={link.id}
              to={link.path}
              className="links"
              style={({ isActive }) => ({
                opacity: isActive ? '1' : '0.5',
              })}
            >
              {link.text}
            </NavLink>
          ))}
        </nav>
      </NavContainer>
      <div>
        <ImUser />
      </div>
    </NavBar>
  );
};

export default Header;
