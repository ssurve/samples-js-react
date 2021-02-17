/*
 * Copyright (c) 2018, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *
 * See the License for the specific language governing permissions and limitations under the License.
 */

import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Image, Menu } from 'semantic-ui-react'; // Icon

const Navbar = () => (
  <div>
    <Menu fixed="top" inverted>
      <Container>
        <Menu.Item header>
          <Image size="mini" src="/react.svg" />
          &nbsp;
          <Link to="/">Sample App (Custom Login)</Link>
        </Menu.Item>
      </Container>
    </Menu>
  </div>
);
export default Navbar;
