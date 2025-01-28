import javax.swing.JFrame;
import javax.swing.WindowConstants;


public class MiJFrame extends JFrame {
  
  public static void main(String[] args) {
    MiJFrame frame = new MiJFrame();
    frame.setVisible(true);
  }

  public MiJFrame() {
    initGUI();
  }

  private void initGUI() {
    setDefaultCloseOperation(
        WindowConstants.DISPOSE_ON_CLOSE);
    setTitle("Mi JFrame");
    setSize(400, 300);
  }
}
