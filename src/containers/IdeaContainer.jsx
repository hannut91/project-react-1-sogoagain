import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { loadIdea } from '../features/ideaSlice';

import IdeaDescription from '../components/IdeaDescription';

export default function IdeaContainer() {
  const dispatch = useDispatch();
  const idea = useSelector((state) => state.idea);

  const handleClick = () => {
    dispatch(loadIdea());
  };

  useEffect(() => {
    dispatch(loadIdea());
  }, []);

  if (!idea.who || !idea.what) {
    return (
      <p>생각중...</p>
    );
  }

  return (
    <IdeaDescription
      idea={idea}
      onClick={handleClick}
    />
  );
}
