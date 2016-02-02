var Test = React.createClass({
    getInitialState:function() {
        return {
            input_value:"123",
            initData:1,
            dialogContent:<p>pppppppppppppppppppppp</p>,
            dynamicCheckbox:0,
            dynamicCheckboxValue:"type_2",
            radioGroup:'type_1'
        };
    },
    inputChange:function(e) {
        var value = e.target.value;
        this.setState({
            input_value:value.replace(/\d/g, '')
        });
    },
    componentDidMount:function() {
        this.setState({
            input_value:999,
            initData:0,
            dialogContent:[1,2,3,4,5].map(function(item, index) {
                return <p key={index}>pppppppppppppppppppppp</p>;
            }),
            dynamicCheckbox:1,
            dynamicCheckboxValue:"dynamicCheckboxValue",
            radioGroup:'type_2'
        });
    },
    showDialog:function() {
        this.refs.dialog.show();
    },
    dialogCancel:function() {
        alert('dialog cancel');
    },
    dialogSubmit:function() {
        alert('dialog submit');
    },
    showAlert:function() {
        RUI.DialogManager.alert('Test');
        RUI.DialogManager.alert('Test', 'Test Title');
    },
    showConfirm:function() {
        RUI.DialogManager.confirm('somthing');
        RUI.DialogManager.confirm({
            message:'Are you kidding me ?',
            title:'Just a joke',
            submit:function() {
                alert('you are joke me');
            }
        })
    },
    followShowLoading:function(e) {
        this.refs.fLoading.open(e);
    },
    partialShowLoading:function(v,e) {
        this.refs.pLoading.open(v,e);
    },
    fullShowLoading:function(e) {
        this.refs.aLoading.open(e);
    },
    closeLoading:function() {
        this.refs.myLoading.close();
    },
    filterCallback : function() {
        return [{key:'hello',value:'1'},{key:'well',value:'2'}];
    },
    selectCallback : function(e) {
        console.dir(this.refs.selectBody._getChoose());
        console.dir(this.refs.selectBody._choose);
        console.dir(this.refs.selectBody);
    },
    filterHandle : function() {
        return [
            {
                key : '新的',
                value : 'new'
            }
        ];
    },
    onPage:function(index) {
        alert(index);
    },
    valueChange:function(event) {
        console.log(event);
    },
    groupChange:function(event) {
        alert(event.data);
    },
    radioGroupChange:function(event) {
        alert(event.data);
    },
    checkboxDynamicChange:function(event) {
        alert(JSON.stringify(event.data));
    },
    tableDeleteTest:function(data) {
        console.log(arguments);
        alert('delete ' + data.id);
    },
    getSinglePickerValue:function() {
        alert(this.refs.singleDatePicker.getValue());
    },
    getRangePickerValue:function() {
        alert(JSON.stringify(this.refs.rangeDatePicker.getValue()));
    },
    setRangePickerValue:function() {
        this.refs.rangeDatePicker.setValue({
            startValue:Date.now(),
            endValue:Date.now() + 86400 * 1000 * 90
        });
    },
    datePickerChange:function(e) {
        alert(JSON.stringify(e.data));
    },
    render:function() {
        var tableData = [
            {id:1, name:"商品测试1", category:"爆品", price:"199", percent:'10'},
            {id:2, name:"商品测试2", category:"热销", price:"399", percent:'10'},
            {id:3, name:"商品测试3", category:"预热", price:"299", percent:'10'},
            {id:4, name:"商品测试4", category:"当季推荐", price:"99", percent:'10'}
        ];
        return <div style={{paddingLeft:100}}>
            <RUI.DatePicker ref="singleDatePicker" range={false}>
            </RUI.DatePicker>
            <RUI.Button onClick={this.getSinglePickerValue}>获取结果</RUI.Button>
            <br/>
            <RUI.DatePicker ref="rangeDatePicker" range={true} />
            <RUI.Button onClick={this.getRangePickerValue}>获取结果</RUI.Button>
            <RUI.Button onClick={this.setRangePickerValue}>三个月内</RUI.Button>
            <br/>
            <RUI.DatePicker value={Date.now()} format={new RUI.DateFormatter("Y-m-d")} range={false}>
                <RUI.Tooltip align="top-center" trigger="click">嵌套使用，click触发</RUI.Tooltip>
            </RUI.DatePicker>
            <br/>
            <RUI.DatePicker value={Date.now()} format={new RUI.DateFormatter("Y-m-d")} range={true} onChange={this.datePickerChange} />
            <br/>
            <RUI.Table dataSource={tableData}>
                <RUI.Column checkbox={true}>
                    <RUI.Table.TitleRender>
                        <RUI.Checkbox selected={0} />
                    </RUI.Table.TitleRender>
                    <RUI.Table.ItemRender>
                        <RUI.Checkbox selected={0} />
                    </RUI.Table.ItemRender>
                </RUI.Column>
                <RUI.Column title={"商品名称"} dataField={"name"}/>
                <RUI.Column title={"所属分类"} dataField={"category"} />
                <RUI.Column title={"销售价"} dataField={"price"} />
                <RUI.Column title={"返佣比例"} dataField={"percent"} />
                <RUI.Column title={"操作"}>
                    <RUI.Table.ItemRender>
                        <RUI.Button onClick={this.tableDeleteTest}>删除</RUI.Button>
                    </RUI.Table.ItemRender>
                </RUI.Column>
            </RUI.Table>
            <br/>
            <RUI.CheckboxGroup ref="checkboxGroup" onChange={this.groupChange}>
                <RUI.Checkbox value="type_1" selected={this.state.initData}>初始已选</RUI.Checkbox>
                <RUI.Checkbox value="type_2" selected={0}>初始未选</RUI.Checkbox>
                <RUI.Checkbox value="type_2" selected={0}>分组测试</RUI.Checkbox>
                <RUI.Checkbox value="type_3" selected={1} onChange={this.valueChange}>自身含事件</RUI.Checkbox>
            </RUI.CheckboxGroup>
            <br/>
            <RUI.RadioGroup ref="radioGroup" onChange={this.radioGroupChange} value={this.state.radioGroup}>
                <RUI.Radio value="type_1">初始已选</RUI.Radio>
                <RUI.Radio value="type_2">初始未选</RUI.Radio>
                <RUI.Radio value="type_3">分组测试</RUI.Radio>
                <RUI.Radio value="type_4" disable={true}>禁用状态</RUI.Radio>
            </RUI.RadioGroup>
            <br/>
            <RUI.Radio value="type_1" selected={1} onChange={this.valueChange}>初始已选</RUI.Radio>
            <RUI.Radio value="type_2" selected={0}>初始未选</RUI.Radio>
            <RUI.Radio value="type_3" selected={0} disable={true}>禁用状态</RUI.Radio>
            <br/>
            <RUI.Checkbox value="type_1" selected={1} onChange={this.valueChange}>初始已选</RUI.Checkbox>
            <RUI.Checkbox value={this.state.dynamicCheckboxValue} selected={this.state.dynamicCheckbox} onChange={this.checkboxDynamicChange}>初始未选</RUI.Checkbox>
            <RUI.Checkbox value="type_3" selected={0} disable={true}>禁用状态</RUI.Checkbox>
            <br/>
            <RUI.Button className="primary" onClick={this.showDialog}>测试Dialog</RUI.Button>
            <RUI.Button onClick={this.showAlert}>测试Alert</RUI.Button>
            <RUI.Button onClick={this.showConfirm}>测试Confirm</RUI.Button>
            <br/>
            <RUI.Input value={this.state.input_value} onChange={this.inputChange} /><br/>
            <RUI.Input className="small"/><br/>
            <RUI.Input className="medium"/><br/>
            <RUI.Input className="large"/><br/>
            <RUI.Input className="full"/>
            <br/>
            <RUI.Pagination pageSize={10} currentPage={11} totalNum={780} onPage={this.onPage} />
            <br/>
            <RUI.Dialog ref="dialog" title="测试标题" buttons="submit,cancel" onCancel={this.dialogCancel} onSubmit={this.dialogSubmit}>
                <div style={{width:'240px', wordWrap:'break-word'}}>
                    {this.state.dialogContent}
                </div>
            </RUI.Dialog>
            <br/>
            <RUI.Button>
                <span>上方Tooltip</span>
                <RUI.Tooltip align="top-center">Tooltip</RUI.Tooltip>
            </RUI.Button><br/>
            <RUI.Button>
                <span>下方Tooltip</span>
                <RUI.Tooltip align="bottom-center">Tooltip</RUI.Tooltip>
            </RUI.Button>
            <br/>
            <RUI.Button>
                <span>左方Tooltip</span>
                <RUI.Tooltip align="middle-left">Tooltip</RUI.Tooltip>
            </RUI.Button>
            <br/>
            <RUI.Button>
                <span>右方Tooltip</span>
                <RUI.Tooltip align="middle-right">Tooltip</RUI.Tooltip>
            </RUI.Button>
            <br/>
            <RUI.Button>
                <span>左上方Tooltip</span>
                <RUI.Tooltip align="top-left">Tooltip</RUI.Tooltip>
            </RUI.Button>
            <br/>
            <RUI.Button>
                <span>右上方Tooltip</span>
                <RUI.Tooltip align="top-right">Tooltip</RUI.Tooltip>
            </RUI.Button>
            <br/>
            <RUI.Button>
                <span>左下方Tooltip</span>
                <RUI.Tooltip align="bottom-left">Tooltip</RUI.Tooltip>
            </RUI.Button>
            <br/>
            <RUI.Button>
                <span>右下方Tooltip</span>
                <RUI.Tooltip align="bottom-right"><span style={{color:'#d90000'}}>this is a html block</span></RUI.Tooltip>
            </RUI.Button>
            <br/>
            <br/>
            <RUI.Select
                data={[{key:'查看',value:'1'}]}
                value={{key:'查看',value:'1'}}
                event={'click'}
                className="rui-theme-1">
            </RUI.Select>
            <br/>
            <br/>

            <RUI.Select
                data={[{key:'查看',value:'1'}]}
                value={{key:'查看',value:'1'}}
                className="rui-theme-2"
                offset={'0'}>
            </RUI.Select>
            <br/>
            <br/>
            <RUI.Select
                data={[{key:'查看',value:'1'}]}
                value={{key:'查看',value:'1'}}
                filter={true}
                className="rui-theme-3"
                stuff={true}
                filterCallback={this.filterHandle}>
            </RUI.Select>
            <br/>
            <br/>
            <br/>
            <RUI.Select
                ref="selectBody"
                data={[{key:'查看',value:'1'},{key:'你好',value:'2'}]}
                value={{key:'查看',value:'1'}}
                className="rui-theme-3"
                stuff={true}
                callback={this.selectCallback}>
            </RUI.Select>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <div data-id="partial-node" style={{width:'300px',height:'200px',background:'#f1f1f1'}}>
            </div>
            <RUI.Loading
                ref="pLoading"
                type={'partial-screen'}
                mask={false}
                size={'s-small'}>
            </RUI.Loading>
            <RUI.Button onClick={this.partialShowLoading.bind(this,'partial-node')}>遮住特定元素</RUI.Button>
            <hr />
            <RUI.Loading
                ref="fLoading"
                type={'follow'}
                mask={false}
                size={'s-small'}>
            </RUI.Loading>
            <RUI.Button onClick={this.followShowLoading}>尾随点击元素</RUI.Button>
            <hr />
            <RUI.Loading
                ref="aLoading"
                type={'full-screen'}
                mask={true}
                size={'s-middle'}>
            </RUI.Loading>
            <RUI.Button onClick={this.fullShowLoading}>全屏</RUI.Button>
            <br/>
            <br/>
            <RUI.Select
                ref="selectMBody"
                data={[{key:'查看',value:'1'},{key:'你好',value:'2'}]}
                value={{key:'查看',value:'1'}}
                className="rui-theme-3"
                filter={true}
                maxLen={11}
                reg={/^[0-9]+$/}
                placeholder={'请输入手机号'}
                filterCallback={this.filterCallback}
                stuff={true}
                result={'找不到结果'}
                callback={this.selectCallback}>
            </RUI.Select>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
        </div>;
    }
});

ReactDOM.render(<Test />, document.getElementById('wrapper'));