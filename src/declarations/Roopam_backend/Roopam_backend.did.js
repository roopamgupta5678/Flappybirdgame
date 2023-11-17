export const idlFactory = ({ IDL }) => {
  const BoxInputData = IDL.Record({
    'box0' : IDL.Text,
    'box1' : IDL.Text,
    'box2' : IDL.Text,
  });
  return IDL.Service({
    'changeTurn' : IDL.Func([IDL.Text], [IDL.Text], ['query']),
    'checkWin' : IDL.Func([BoxInputData], [IDL.Bool], []),
  });
};
export const init = ({ IDL }) => { return []; };
