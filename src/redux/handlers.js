export const handlePending = state => {
  state.isLoading = true;
};

export const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

export const handleFulfilledFetch = (state, action) => {
  state.isLoading = false;
  state.error = null;
  state.contactList = action.payload;
};

export const handleFulfilledAdd = (state, action) => {
  state.isLoading = false;
  state.error = null;
  state.contactList.push(action.payload);
};

export const handleFulfilledDelete = (state, action) => {
  state.isLoading = false;
  state.error = null;
  state.contactList = state.contactList.filter(
    contact => contact.id !== action.payload.id
  );
};

export const handleFilter = (state, action) => {
  state.filterValue = action.payload;
};
