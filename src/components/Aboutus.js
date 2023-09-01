import Contact from "./Contact";
const Aboutus = () => {
  return (
    <div>
      <div>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut id erat in
        justo semper malesuada at ac est. Morbi in metus in nunc rutrum
        tristique auctor in urna. Maecenas eget nunc non turpis ultrices
        sollicitudin. Sed ac sem aliquet, dictum eros id, malesuada tellus. Sed
        mollis magna nec venenatis molestie. Donec sit amet erat tristique,
        commodo odio in, maximus massa. Pellentesque porttitor turpis ut
        malesuada suscipit. Maecenas non velit efficitur turpis iaculis rutrum a
        vel dolor. Donec id orci at mi bibendum mattis sit amet vitae magna.
        Vestibulum in odio ut urna consequat consectetur et at diam.
        Pellentesque sed erat nec tellus cursus rutrum. Curabitur quis est
        venenatis, ultrices sem et, pretium sem. Donec porttitor ex ac leo
        pharetra, eget hendrerit orci ultricies. Morbi suscipit neque et
        ullamcorper hendrerit. Fusce eget nisl nec sem aliquet rutrum. Sed
        fermentum leo ut velit facilisis efficitur a vitae purus.
      </div>
      <div className='m-7'>
        <Contact propText={"Hello From parent"}></Contact>
      </div>
    </div>
  );
};

export default Aboutus;
