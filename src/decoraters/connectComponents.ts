import { connect } from 'react-redux';

export default (component: any) =>
  connect(
    component.mapStateToProps,
    component.mapDispatchToProps
  )(component);
