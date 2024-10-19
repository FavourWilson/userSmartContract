async function main() {
    const UserContact = await ethers.getContractFactory("UserContact");
    const userContact = await UserContact.deploy();
    await userContact.waitForDeployment();

    console.log("UserContact deployed to:", userContact.target);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });