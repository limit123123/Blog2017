import * as React from 'react'
import { Provider } from 'mobx-react'
import Layout from '../components/layout'
import Page from '../components/page'
import { initStore } from '../store'

export default class Home extends React.Component<any, any> {
  store: any

  constructor(props: any) {
    super(props)
    this.store = initStore(props.isServer, props.lastUpdate, props.num)
  }

  getInitialProps({ req }: any) {
    const isServer = !!req
    const store = initStore(isServer)
    return { lastUpdate: store.lastUpdate, isServer, num: store.num }
  }

  render() {
    return (
      <Provider store={this.store}>
        <Layout>
          <p>Hello, I'm the home page</p>
          <Page title="Index Page" />
        </Layout>
      </Provider>
    )
  }
}
