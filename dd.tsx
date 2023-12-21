<div className="flex ">
<Button
  type="text"
  icon={collapsed ? <MenuOutlined /> : <MenuOutlined />}
  onClick={() => setCollapsed(!collapsed)}
  style={{
    marginLeft: collapsed ? "20px" : "60px",
    fontSize: "16px",
    width: 45,
    height: 45,

    marginRight: "10px",
  }}
/>
<ConfigProvider
  theme={{
    components: {
      Input: {
        colorBgContainer: "rgb(244, 244, 244)",
      },
    },
  }}
>
  <Input
    allowClear={true}
    prefix={<SearchOutlined className="text-[#A7A7A7] " />}
    placeholder="search here"
    className="h-[50px] w-[461px] border-0"
  />
</ConfigProvider>
</div>
<div className="flex items-center gap-x-6">
<Select
  options={options}
  defaultValue={options[0]}
  value={selectedLanguage}
  style={{ width: 150 }}
  onChange={handleSelectLanguage}
></Select>

<Link to="/notification " className="flex items-center">
  <Badge count={5} className="cursor-pointer">
    <IoIosNotificationsOutline
      style={{ width: "30px", height: "30px" }}
    />
  </Badge>
</Link>
<div className="flex items-center gap-x-2">
  <img
    src="https://t.ly/18Nvk"
    className="w-[40px] h-[40px] object-cover rounded-full"
    alt=""
  />

  <div className="my-[2px]">
    <h1 className="font-semibold">Mr. Admin John Doe</h1>
  </div>
</div>
</div>