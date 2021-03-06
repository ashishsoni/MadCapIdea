import * as React from "react";
import * as ReactDOM from "react-dom";
import * as _ from "lodash";
import { Button } from 'react-bootstrap';
import { injectable, inject } from "inversify";
import { TYPES } from "../types";
import 'bootstrap/dist/css/bootstrap.css';
import { Foo } from "../domain/Foo";

export interface HelloProps {
    compiler: string;
    framework: string;
    foo: Foo;
}

// 'HelloProps' describes the shape of props.
// State is never set so we use the 'undefined' type.
export class Hello extends React.Component<HelloProps, undefined> {

    constructor(props) {
        super(props);
        console.log(this.props); // prints out whatever is inside props
    }

    render() {


        console.log("jquery");
        console.log($);
        console.log($.fn.jquery);

        var foo = new Foo(222);
        var x = foo.getNum();
        console.log("Foo should be 444");
        console.log(x);

        console.log("lodash version");
        console.log(_.VERSION);

        var foo2 = new Foo(20);
        var x2 = foo2.getNum();
        console.log("Foo should be 40");
        console.log(x2);

        var foo3 = new Foo(40);
        var x3 = foo3.getNum();
        console.log("Foo should be 80");
        console.log(x3);

        return <div>
                <Button bsStyle="primary" bsSize="large">Large button</Button>
                <h1 id="helloText">Hello from {this.props.compiler} and {this.props.framework} fooZZ = {this.props.foo.getNum()}!</h1>
               </div>;
    }
}