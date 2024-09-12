import styled from 'styled-components';

const Wrapper = styled.div`
  /* CocktailPage */
  header {
    text-align: center;
    margin-bottom: 3rem;
    .btn {
      margin: 1rem;
    }
  }
  .img {
    border-radius: var(--borderRadius);
  }
  .drink-info {
    padding-top: 2rem;
  }
  .drink p {
    font-weight: 700;
    text-transform: capitalize;
    line-height: 2;
    margin-bottom: 1rem;
  }
  .drink-data {
    color: var(--primary-700);
    background: var(--primary-300);
    letter-spacing: var(--letterSpacing);
    padding: 0.25rem 0.5rem;
    border-radius: var(--borderRadius);
    margin-right: 0.5rem;
  }
  .ing {
    margin-right: 0.5rem;
    display: block;
  }
  @media (min-width: 992px) {
    .drink {
      display: grid;
      grid-template-columns: 2fr 3fr;
      align-items: center;
      gap: 3rem;
    }
    .drink-info {
      padding-top: 2rem;
    }
  }
`;

export default Wrapper;
