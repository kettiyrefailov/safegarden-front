import styled from "styled-components";

export const TabContainer = styled.div`
  width: 100%;

  .title {
    font-weight: bold;
    padding: 0.5rem;
  }
  .body {
    padding: 1em;
  }
  .tabs {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    .tab {
      margin-bottom: 2rem;
      cursor: pointer;
      padding: 5px 1em;
      background-color: var(--color-brand--2);
      color: var(--color-dark--0);
      padding: 0.8rem 2rem;
      border-radius: 7px;
      font-size: 1.5rem;
      text-decoration: none;
      text-transform: uppercase;
      font-weight: 600;
      border: none;
      cursor: pointer;
      min-width: 200px;
      &:hover {
        background-color: var(--color-brand--3);
        color: white;
      }
    }
  }
`;
